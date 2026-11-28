---
type: Model
title: Step 3.5 Flash 2603
creator: StepFun
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.064
output_speed_tps: 125.330142050571
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.8, z: 0.73, r: 61.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: 0.28, r: 54.3, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 68.8, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.41, r: 56.1, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash 2603
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Step 3.5 Flash 2603

StepFun · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 125.330142050571 t/s · TTFT 3.80444721772782s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.0 | +0.73 | 실측 | [[gpqa-diamond]] 82.6263%×0.4, [[humanitys-last-exam]] 24.4671%×0.3 |
| 추론 | 54.3 | +0.28 | 실측 | [[critpt]] 2.28571%×1.0, [[gpqa-diamond]] 82.6263%×1.0, [[humanitys-last-exam]] 24.4671%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 32.5758%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[tau2-bench]] 87.4269%×1.0, [[terminal-bench]] 32.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.1 | +0.41 | 실측 | [[aa-lcr]] 63%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 66.5306%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
