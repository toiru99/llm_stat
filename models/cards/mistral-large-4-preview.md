---
type: Model
title: Mistral Large 4 Preview
creator: Mistral
license: Proprietary
intelligence_index: 25.2354413871549
price_blended_usd_1m: 0.399
output_speed_tps: 81.5189556060309
context_window: 524288
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.4, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 38.0, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.24, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Mistral Large 4 Preview

Mistral · Proprietary · Large · 컨텍스트 524k · 종합지능 **25.2354413871549** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 81.5189556060309 t/s · TTFT 2.6905542921233s · 524k ctx` · 가성비 63.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[humanitys-last-exam]] 35.0324%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 10.5714%×1.0, [[humanitys-last-exam]] 35.0324%×1.0 |
| 코딩 | 68.5 | +1.24 | 실측 | [[scicode]] 54.1667%×1.0 |
| 에이전트 | 67.8 | +1.19 | 실측 | [[gdpval]] 1431.16 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.4162%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 81.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
