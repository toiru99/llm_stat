---
type: Model
title: Step 3.5 Flash 2603
creator: StepFun
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.064
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 61.5, z: 0.72, r: 60.8, estimated: false }  # 추론
  coding: { s: 49.5, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 49.5, z: 0.52, r: 57.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.0, z: 0.55, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.99, r: 64.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash 2603
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Step 3.5 Flash 2603

StepFun · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 82.6%×0.4, [[humanitys-last-exam]] 24.5%×0.3 |
| 추론 | 60.8 | +0.72 | 실측 | [[gpqa-diamond]] 82.6%×1.0, [[humanitys-last-exam]] 24.5%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[terminal-bench]] 32.6%×0.5 |
| 에이전트 | 57.8 | +0.52 | 실측 | [[terminal-bench]] 32.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.3 | +0.55 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 실측 | [[ifbench]] 66.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
