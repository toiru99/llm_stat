---
type: Model
title: GLM-5 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.66
output_speed_tps: 60.0
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 37.9, z: -0.14, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 26.1, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.57, r: 73.6, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.42, r: 71.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: 0.01, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GLM-5 (Non-reasoning)

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 60.0 t/s · TTFT 1.45s · 200k ctx` · 가성비 39.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.14 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 73.6 | +1.57 | 실측 | [[tau2-bench]] 97.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 71.3 | +1.42 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.2 | +0.01 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
