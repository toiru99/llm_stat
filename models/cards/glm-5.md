---
type: Model
title: GLM-5
creator: Z AI
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.66
output_speed_tps: 47.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.5, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 47.3, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 72.8, z: 1.13, r: 66.9, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: 76.5, z: 2.3, r: 84.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# GLM-5

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 47.0 t/s · TTFT 1.78s · 200k ctx` · 가성비 60.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 66.9 | +1.13 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[apex-agents]] 14.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 84.5 | +2.3 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 69.9 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
