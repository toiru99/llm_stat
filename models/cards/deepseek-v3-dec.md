---
type: Model
title: DeepSeek V3 (Dec)
creator: DeepSeek
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.45
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: 42.4, z: -0.15, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 12.2, z: -0.93, r: 36.1, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.2, z: -0.3, r: 45.5, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.82, r: 37.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 (Dec)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# DeepSeek V3 (Dec)

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $0.89 · 혼합 $0.45/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 31.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.8 | -0.15 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 36.1 | -0.93 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.5 | -0.3 | 실측 | [[aa-lcr]] 29.0%×1.0 |
| 지시 따르기 | 37.8 | -0.82 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
