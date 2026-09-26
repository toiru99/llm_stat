---
type: Model
title: DeepSeek V4 Flash (high)
creator: DeepSeek
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.0736
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.3, z: 0.88, r: 63.2, estimated: false }  # 전문 지식
  reasoning: { s: 49.1, z: 0.64, r: 59.5, estimated: false }  # 추론
  coding: { s: 56.4, z: 0.74, r: 61.1, estimated: false }  # 코딩
  agentic: { s: 69.0, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.92, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# DeepSeek V4 Flash (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.13 · 출력 $0.28 · 혼합 $0.0736/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 353.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.2 | +0.88 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 59.5 | +0.64 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 61.1 | +0.74 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.92 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
