---
type: Model
title: GLM-4.6V
creator: Z AI
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.36
output_speed_tps: 63.0
context_window: 128000
status: past
size_class: Medium
params_b: 108
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.41, r: 43.8, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.14, r: 67.0, estimated: false }  # 신뢰성
  multimodal: { s: 47.2, z: -1.14, r: 33.0, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.14, r: 32.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GLM-4.6V

Z AI · Open · Medium(108B) · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.36/1M · 63.0 t/s · TTFT 3.92s · 128k ctx` · 가성비 30.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.8 | -0.41 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 67.0 | +1.14 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 33.0 | -1.14 | 실측 | [[mmmu-pro]] 49.0%×1.0 |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 32.9 | -1.14 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
