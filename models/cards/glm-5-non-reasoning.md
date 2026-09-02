---
type: Model
title: GLM-5 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.66
output_speed_tps: 64.0
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 38.1, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 26.4, z: -0.4, r: 43.9, estimated: false }  # 추론
  coding: { s: 60.6, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.44, r: 71.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.8, z: 0.06, r: 50.9, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# GLM-5 (Non-reasoning)

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 64.0 t/s · TTFT 1.39s · 200k ctx` · 가성비 50.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 43.9 | -0.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[tau2-bench]] 97.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 71.7 | +1.44 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.9 | +0.06 | 실측 | [[aa-lcr]] 43.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
