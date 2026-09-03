---
type: Model
title: DeepSeek V3.2 Exp (Non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.1176
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.7, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 55.6, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 36.1, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 54.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 Exp (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# DeepSeek V3.2 Exp (Non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.1176/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 187.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[tau2-bench]] 34.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
