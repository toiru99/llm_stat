---
type: Model
title: Qwen3 8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.1, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 30.0, z: -0.99, r: 35.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3 8B

Alibaba · Open · Small · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 58.8888888888889%×0.4, [[humanitys-last-exam]] 3.8899999999999997%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.8888888888889%×1.0, [[humanitys-last-exam]] 3.8899999999999997%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[scicode]] 27.8935185185185%×1.0, [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[gdpval]] -41.45%×1.0, [[tau2-bench]] 27.7777777777778%×1.0, [[tau3-banking]] 4.74226804123711%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.2 | -0.99 | 실측 | [[ifbench]] 33.469387755102%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
