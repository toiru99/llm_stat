---
type: Model
title: GLM-4.6V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2742
output_speed_tps: 43.18356777322007
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.72, r: 39.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.81, r: 37.9, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.2, r: 32.0, estimated: false }  # 코딩
  agentic: { s: 17.8, z: -0.94, r: 36.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.9, z: -1.76, r: 23.6, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -1.02, r: 34.7, estimated: false }  # 긴문맥
  instruction: { s: 22.2, z: -1.33, r: 30.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GLM-4.6V (non-reasoning)

Z AI · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2742/1M · 43.18356777322007 t/s · TTFT 7.273441628144407s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.2 | -0.72 | 실측 | [[gpqa-diamond]] 56.565656565656596%×0.4, [[humanitys-last-exam]] 3.66079703429101%×0.3 |
| 추론 | 37.9 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.565656565656596%×1.0, [[humanitys-last-exam]] 3.66079703429101%×1.0 |
| 코딩 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 3.03030303030303%×0.5 |
| 에이전트 | 36.0 | -0.94 | 실측 | [[tau2-bench]] 30.701754385964904%×1.0, [[terminal-bench]] 3.03030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.6 | -1.76 | 실측 | [[mmmu-pro]] 42.196531791907496%×1.0 |
| 긴문맥 | 34.7 | -1.02 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 30.1 | -1.33 | 실측 | [[ifbench]] 27.891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
