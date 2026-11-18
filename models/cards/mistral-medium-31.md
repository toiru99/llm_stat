---
type: Model
title: Mistral Medium 3.1
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.5, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.9, z: -0.95, r: 35.8, estimated: false }  # 멀티모달
  long_context: { s: 48.1, z: -0.16, r: 47.6, estimated: false }  # 긴문맥
  instruction: { s: 38.9, z: -0.63, r: 40.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Mistral Medium 3.1

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[gpqa-diamond]] 58.7878787878788%×0.4, [[humanitys-last-exam]] 4.68025949953661%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.7878787878788%×1.0, [[humanitys-last-exam]] 4.68025949953661%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[scicode]] 32.407407407407405%×1.0, [[terminal-bench]] 10.6060606060606%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[gdpval]] 392.33%×1.0, [[tau2-bench]] 40.643274853801195%×1.0, [[tau3-banking]] 8.24742268041237%×1.0, [[terminal-bench]] 10.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.8 | -0.95 | 실측 | [[mmmu-pro]] 54.1618497109827%×1.0 |
| 긴문맥 | 47.6 | -0.16 | 실측 | [[aa-lcr]] 42.6666666666667%×1.0 |
| 지시 따르기 | 40.6 | -0.63 | 실측 | [[ifbench]] 39.7959183673469%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
