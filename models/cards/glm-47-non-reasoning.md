---
type: Model
title: GLM-4.7 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.511
output_speed_tps: 71.605648159466
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.33, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.2, r: 53.0, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 0.88, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.9, z: -0.23, r: 46.5, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.24, r: 53.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GLM-4.7 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.525 · 출력 $2.1 · 혼합 $0.511/1M · 71.605648159466 t/s · TTFT 3.40725952735968s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.33 | 실측 | [[gpqa-diamond]] 66.3636363636364%×0.4, [[humanitys-last-exam]] 6.39481000926784%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.3636363636364%×1.0, [[humanitys-last-exam]] 6.39481000926784%×1.0 |
| 코딩 | 53.0 | +0.2 | 실측 | [[terminal-bench]] 30.303030303030297%×0.5 |
| 에이전트 | 63.3 | +0.88 | 실측 | [[tau2-bench]] 94.15204678362569%×1.0, [[terminal-bench]] 30.303030303030297%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.5 | -0.23 | 실측 | [[aa-lcr]] 40.6666666666667%×1.0 |
| 지시 따르기 | 53.6 | +0.24 | 실측 | [[ifbench]] 54.6258503401361%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
