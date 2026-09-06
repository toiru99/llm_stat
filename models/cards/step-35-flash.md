---
type: Model
title: Step 3.5 Flash
creator: StepFun
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.12
output_speed_tps: 228.0
context_window: 256000
status: past
size_class: Large
params_b: 196
is_reasoning: true
radar:
  knowledge: { s: 47.1, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.3, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 67.9, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Step 3.5 Flash

StepFun · Open · Large(196B) · 컨텍스트 256k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 228.0 t/s · TTFT 1.17s · 256k ctx` · 가성비 158.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 54.6 | +0.3 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 63.7 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
