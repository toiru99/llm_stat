---
type: Model
title: LFM2.5-8B-A1B
creator: Liquid AI
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0
output_speed_tps: 337.0
context_window: 32800
status: current
size_class: Small
params_b: 8.3
is_reasoning: true
radar:
  knowledge: { s: 20.8, z: -0.96, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.0, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 11.4, z: -1.49, r: 27.6, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.95, r: 35.8, estimated: false }  # 에이전트
  trust: { s: 59.3, z: 1.51, r: 72.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.34, r: 55.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-8B-A1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# LFM2.5-8B-A1B

Liquid AI · Open · Small(8.3B) · 컨텍스트 32k · 종합지능 **8.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 337.0 t/s · TTFT 1.57s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 27.6 | -1.49 | 실측 | [[scicode]] 8.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.8 | -0.95 | 실측 | [[tau2-bench]] 16.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 72.7 | +1.51 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 55.2 | +0.34 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
