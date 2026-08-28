---
type: Model
title: LFM2 8B A1B
creator: Liquid AI
license: Open
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: current
size_class: Small
params_b: 8.34
is_reasoning: false
radar:
  knowledge: { s: 15.2, z: -1.27, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 11.9, z: -1.14, r: 32.8, estimated: false }  # 추론
  coding: { s: 7.8, z: -1.67, r: 25.0, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.23, r: 31.6, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.2, z: -1.48, r: 27.9, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.37, r: 29.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 8B A1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# LFM2 8B A1B

Liquid AI · Open · Small(8.34B) · 컨텍스트 32k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.27 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.8 | -1.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.0 | -1.67 | 실측 | [[scicode]] 7.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.6 | -1.23 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.9 | -1.48 | 실측 | [[aa-lcr]] 1.0%×1.0 |
| 지시 따르기 | 29.4 | -1.37 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
