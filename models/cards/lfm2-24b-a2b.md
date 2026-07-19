---
type: Model
title: LFM2 24B A2B
creator: Liquid AI
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: current
size_class: Small
params_b: 23.8
is_reasoning: false
radar:
  knowledge: { s: 16.3, z: -1.17, r: 32.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.6, z: -0.9, r: 36.6, estimated: false }  # 추론
  coding: { s: 12.2, z: -1.44, r: 28.5, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.19, r: 32.1, estimated: false }  # 에이전트
  trust: { s: 34.1, z: 0.3, r: 54.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.44, r: 28.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.19, r: 47.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 24B A2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# LFM2 24B A2B

Liquid AI · Open · Small(23.8B) · 컨텍스트 32k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.4 | -1.17 | 실측 | [[aa-omniscience]] 6.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.6 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 28.5 | -1.44 | 실측 | [[scicode]] 11.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.1 | -1.19 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 30.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.3 | -1.44 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 47.2 | -0.19 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
