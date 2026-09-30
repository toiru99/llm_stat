---
type: Model
title: DeepSeek V3.1 (Non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.672
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.5, z: -0.13, r: 48.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 36.4, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.1, r: 48.6, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.04, r: 50.7, estimated: false }  # 긴문맥
  instruction: { s: 36.6, z: -0.72, r: 39.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# DeepSeek V3.1 (Non-reasoning)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.56 · 출력 $1.68 · 혼합 $0.672/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 20.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 48.6 | -0.1 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.7 | +0.04 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 39.3 | -0.72 | 실측 | [[ifbench]] 38.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
