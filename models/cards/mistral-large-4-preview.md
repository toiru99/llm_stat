---
type: Model
title: Mistral Large 4 Preview
creator: Mistral
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.399
output_speed_tps: 127.0
context_window: 524000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.7, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 45.0, z: -0.03, r: 49.6, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 76.8, z: 1.46, r: 72.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 52.2, z: -0.02, r: 49.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 4 Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Mistral Large 4 Preview

Mistral · Proprietary · Large · 컨텍스트 524k · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.7 · 출력 $2.1 · 혼합 $0.399/1M · 127.0 t/s · TTFT 1.72s · 524k ctx` · 가성비 62.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 49.6 | -0.03 | 실측 | [[critpt]] 24.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 72.0 | +1.46 | 실측 | [[gdpval]] 1433.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 49.7 | -0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
