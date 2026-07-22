---
type: Model
title: DeepSeek R1 0528 Qwen3 8B
creator: DeepSeek
license: Open
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32800
status: past
size_class: Small
params_b: 8.19
is_reasoning: true
radar:
  knowledge: { s: 26.8, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 23.4, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 23.2, z: -0.98, r: 35.3, estimated: false }  # 코딩
  agentic: { s: 1.5, z: -1.35, r: 29.8, estimated: false }  # 에이전트
  trust: { s: 15.3, z: -0.59, r: 41.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.1, z: -0.95, r: 35.7, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.72, r: 24.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528 Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# DeepSeek R1 0528 Qwen3 8B

DeepSeek · Open · Small(8.19B) · 컨텍스트 32k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 35.3 | -0.98 | 실측 | [[scicode]] 20.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 29.8 | -1.35 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.7 | -0.95 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 24.2 | -1.72 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
