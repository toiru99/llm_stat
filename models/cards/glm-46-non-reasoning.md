---
type: Model
title: GLM-4.6 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.7375
output_speed_tps: 60.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 35.0, z: -0.28, r: 45.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 51.3, z: 0.16, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.33, r: 54.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.48, r: 42.8, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.72, r: 39.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GLM-4.6 (Non-reasoning)

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.2 · 혼합 $0.7375/1M · 60.0 t/s · TTFT 2.68s · 200k ctx` · 가성비 31.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.8 | -0.28 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 52.3 | +0.16 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[tau2-bench]] 77.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 54.9 | +0.33 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.8 | -0.48 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 39.2 | -0.72 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
