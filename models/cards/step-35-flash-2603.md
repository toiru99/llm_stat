---
type: Model
title: Step 3.5 Flash 2603
creator: StepFun
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.064
output_speed_tps: 187.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.2, z: 0.42, r: 56.3, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 58.6, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.02, r: 65.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash 2603
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Step 3.5 Flash 2603

StepFun · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 187.0 t/s · TTFT 1.06s · 256k ctx` · 가성비 421.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.3 | +0.42 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 37.6 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
