---
type: Model
title: DeepSeek V4 Flash (high)
creator: DeepSeek
license: Open
intelligence_index: 37.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 65.0, z: 1.12, r: 66.8, estimated: false }  # 전문 지식
  reasoning: { s: 51.0, z: 0.83, r: 62.4, estimated: false }  # 추론
  coding: { s: 66.4, z: 0.8, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 65.5, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.35, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# DeepSeek V4 Flash (high)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.8 | +1.12 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.4 | +0.83 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 62.1 | +0.8 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 70.3 | +1.35 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
