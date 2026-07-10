---
type: Model
title: DeepSeek V3 0324
creator: DeepSeek
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 1.2
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.4, z: -0.48, r: 42.9, estimated: false }  # 추론
  coding: { s: 47.6, z: 0.07, r: 51.1, estimated: false }  # 코딩
  agentic: { s: 21.3, z: -0.57, r: 41.4, estimated: false }  # 에이전트
  trust: { s: 25.9, z: -0.08, r: 48.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.9, z: 0.17, r: 52.5, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.47, r: 43.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 0324
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# DeepSeek V3 0324

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $1.19 · 출력 $1.25 · 혼합 $1.2/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 12.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.9 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 51.1 | +0.07 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 41.4 | -0.57 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 47.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 48.7 | -0.08 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.5 | +0.17 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 43.0 | -0.47 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
