---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.794
output_speed_tps: 81.18694679135861
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.8, z: 1.0, r: 65.1, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.58, r: 58.8, estimated: false }  # 추론
  coding: { s: 63.4, z: 0.8, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 64.4, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.88, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.52, r: 72.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GLM-5.1

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $1.19 · 출력 $3.74 · 혼합 $0.794/1M · 81.18694679135861 t/s · TTFT 3.7276198433439003s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.1 | +1.0 | 실측 | [[gpqa-diamond]] 86.7676767676768%×0.4, [[humanitys-last-exam]] 30.0741427247451%×0.3 |
| 추론 | 58.8 | +0.58 | 실측 | [[critpt]] 4.57142857142857%×1.0, [[gpqa-diamond]] 86.7676767676768%×1.0, [[humanitys-last-exam]] 30.0741427247451%×1.0 |
| 코딩 | 62.1 | +0.8 | 실측 | [[scicode]] 44.7916666666667%×1.0, [[terminal-bench]] 43.1818181818182%×0.5 |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 1124.69%×1.0, [[tau2-bench]] 97.6608187134503%×1.0, [[tau3-banking]] 13.6082474226804%×1.0, [[terminal-bench]] 43.1818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.3 | +0.88 | 실측 | [[aa-lcr]] 73.6666666666667%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 실측 | [[ifbench]] 76.2585034013605%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
