---
type: Model
title: DeepSeek R1 (Jan)
creator: DeepSeek
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 1.9775
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.9, z: -0.27, r: 46.0, estimated: false }  # 추론
  coding: { s: 43.0, z: -0.21, r: 46.8, estimated: false }  # 코딩
  agentic: { s: 8.4, z: -1.11, r: 33.3, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.79, r: 38.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.5, z: 0.52, r: 57.8, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.66, r: 40.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# DeepSeek R1 (Jan)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $1.68 · 출력 $4.7 · 혼합 $1.9775/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 9.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.0 | -0.27 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 46.8 | -0.21 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 33.3 | -1.11 | 실측 | [[gdpval]] 1.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 38.2 | -0.79 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.8 | +0.52 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 40.1 | -0.66 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
