---
type: Model
title: Step 3.5 Flash 2603
creator: StepFun
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 0.064
output_speed_tps: 233.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.9, z: 0.39, r: 55.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: 0.41, r: 56.2, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.8, z: 0.67, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash 2603
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Step 3.5 Flash 2603

StepFun · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 233.0 t/s · TTFT 1.1s · 256k ctx` · 가성비 312.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.8 | +0.39 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 56.2 | +0.41 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.0 | +0.67 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
