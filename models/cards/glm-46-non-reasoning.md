---
type: Model
title: GLM-4.6 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.5835
output_speed_tps: 36.0
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.1, z: -0.42, r: 43.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.8, z: -0.65, r: 40.2, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 43.9, z: 0.32, r: 54.7, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.16, r: 52.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.71, r: 39.3, estimated: false }  # 긴문맥
  instruction: { s: 35.2, z: -0.82, r: 37.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# GLM-4.6 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.2 · 혼합 $0.5835/1M · 36.0 t/s · TTFT 5.76s · 200k ctx` · 가성비 25.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 63.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.2 | -0.65 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 54.7 | +0.32 | 실측 | [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 52.5 | +0.16 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.3 | -0.71 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 37.7 | -0.82 | 실측 | [[ifbench]] 37.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
