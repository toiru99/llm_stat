---
type: Model
title: GLM-4.6 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.5835
output_speed_tps: 32.6475719817572
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.9, z: -0.46, r: 43.2, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.12, r: 51.9, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.55, r: 58.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.71, r: 39.4, estimated: false }  # 긴문맥
  instruction: { s: 34.6, z: -0.81, r: 37.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GLM-4.6 (non-reasoning)

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.575 · 출력 $2.2 · 혼합 $0.5835/1M · 32.6475719817572 t/s · TTFT 9.14532150079453s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.2 | -0.46 | 실측 | [[gpqa-diamond]] 63.232323232323196%×0.4, [[humanitys-last-exam]] 5.4680259499536605%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 63.232323232323196%×1.0, [[humanitys-last-exam]] 5.4680259499536605%×1.0 |
| 코딩 | 51.9 | +0.12 | 실측 | [[terminal-bench]] 28.7878787878788%×0.5 |
| 에이전트 | 58.2 | +0.55 | 실측 | [[tau2-bench]] 76.9005847953216%×1.0, [[terminal-bench]] 28.7878787878788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.4 | -0.71 | 실측 | [[aa-lcr]] 26.333333333333297%×1.0 |
| 지시 따르기 | 37.9 | -0.81 | 실측 | [[ifbench]] 36.734693877551%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
