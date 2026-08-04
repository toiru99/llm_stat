---
type: Model
title: DeepSeek V3 0324
creator: DeepSeek
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.355
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 671
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.19, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 24.4, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 47.6, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.59, r: 41.1, estimated: false }  # 에이전트
  trust: { s: 25.3, z: -0.14, r: 47.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.9, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.51, r: 42.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 0324
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# DeepSeek V3 0324

DeepSeek · Open · Large(671B) · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.27 · 출력 $1.12 · 혼합 $0.355/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 42.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 41.1 | -0.59 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 47.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 47.8 | -0.14 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 42.4 | -0.51 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
