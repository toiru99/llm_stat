---
type: Model
title: Step 3.5 Flash
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: 0.064
output_speed_tps: 119.71903169866715
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.2, z: 0.63, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.22, r: 53.2, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.06, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 68.3, z: 0.82, r: 62.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: 0.09, r: 51.4, estimated: false }  # 긴문맥
  instruction: { s: 73.6, z: 0.84, r: 62.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Step 3.5 Flash

StepFun · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 119.71903169866715 t/s · TTFT 3.5301134443833924s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.63 | 실측 | [[gpqa-diamond]] 83.1313131313131%×0.4, [[humanitys-last-exam]] 21.1306765523633%×0.3 |
| 추론 | 53.2 | +0.22 | 실측 | [[critpt]] 2.46938775510204%×1.0, [[gpqa-diamond]] 83.1313131313131%×1.0, [[humanitys-last-exam]] 21.1306765523633%×1.0 |
| 코딩 | 50.8 | +0.06 | 실측 | [[terminal-bench]] 27.2727272727273%×0.5 |
| 에이전트 | 62.3 | +0.82 | 실측 | [[tau2-bench]] 94.4444444444444%×1.0, [[terminal-bench]] 27.2727272727273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.4 | +0.09 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 62.5 | +0.84 | 실측 | [[ifbench]] 64.5578231292517%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
