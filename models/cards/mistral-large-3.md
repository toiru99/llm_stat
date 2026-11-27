---
type: Model
title: Mistral Large 3
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.285
output_speed_tps: 78.3637373307608
context_window: 256000
status: past
size_class: Large
params_b: 675
is_reasoning: false
radar:
  knowledge: { s: 40.3, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 40.6, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.9, z: -0.84, r: 37.4, estimated: false }  # 멀티모달
  long_context: { s: 40.6, z: -0.52, r: 42.1, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.69, r: 39.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Mistral Large 3

Mistral · Open · Large(675B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.285/1M · 78.3637373307608 t/s · TTFT 3.92173802203608s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[gpqa-diamond]] 67.9798%×0.4, [[humanitys-last-exam]] 4.17053%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.9798%×1.0, [[humanitys-last-exam]] 4.17053%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[scicode]] 36.5741%×1.0, [[terminal-bench]] 15.9091%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[gdpval]] 427.31 Elo×1.0, [[tau2-bench]] 24.5614%×1.0, [[tau3-banking]] 5.7732%×1.0, [[terminal-bench]] 15.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.4 | -0.84 | 실측 | [[mmmu-pro]] 55.6647%×1.0 |
| 긴문맥 | 42.1 | -0.52 | 실측 | [[aa-lcr]] 36%×1.0 |
| 지시 따르기 | 39.6 | -0.69 | 실측 | [[ifbench]] 36.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
