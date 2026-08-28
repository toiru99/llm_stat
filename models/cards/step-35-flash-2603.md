---
type: Model
title: Step 3.5 Flash 2603
creator: StepFun
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.064
output_speed_tps: 230.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 44.9, z: 0.53, r: 57.9, estimated: false }  # 추론
  coding: { s: 60.0, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.3, z: 0.7, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.06, r: 65.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash 2603
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Step 3.5 Flash 2603

StepFun · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 230.0 t/s · TTFT 1.12s · 256k ctx` · 가성비 421.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 57.9 | +0.53 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.7 | 실측 | [[aa-lcr]] 60.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
