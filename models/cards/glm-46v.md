---
type: Model
title: GLM-4.6V
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2742
output_speed_tps: 30.92332475464681
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: -0.05, r: 49.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.61, r: 40.9, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.61, r: 40.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 45.6, z: -1.32, r: 30.3, estimated: false }  # 멀티모달
  long_context: { s: 54.9, z: 0.05, r: 50.7, estimated: false }  # 긴문맥
  instruction: { s: 25.2, z: -1.19, r: 32.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GLM-4.6V

Z AI · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2742/1M · 30.92332475464681 t/s · TTFT 7.44747473995828s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.05 | 실측 | [[gpqa-diamond]] 71.9191919191919%×0.4, [[humanitys-last-exam]] 9.63855421686747%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.9191919191919%×1.0, [[humanitys-last-exam]] 9.63855421686747%×1.0 |
| 코딩 | 40.9 | -0.61 | 실측 | [[terminal-bench]] 14.3939393939394%×0.5 |
| 에이전트 | 40.8 | -0.61 | 실측 | [[tau2-bench]] 31.5789473684211%×1.0, [[terminal-bench]] 14.3939393939394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.3 | -1.32 | 실측 | [[mmmu-pro]] 48.5549132947977%×1.0 |
| 긴문맥 | 50.7 | +0.05 | 실측 | [[aa-lcr]] 48.6666666666667%×1.0 |
| 지시 따르기 | 32.2 | -1.19 | 실측 | [[ifbench]] 30.068027210884402%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
