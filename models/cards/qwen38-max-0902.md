---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 33.6861915246676
price_blended_usd_1m: 1.175
output_speed_tps: 61.0654880238774
context_window: 983616
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.5, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 67.7, z: 1.62, r: 74.2, estimated: false }  # 추론
  coding: { s: 74.3, z: 1.12, r: 66.8, estimated: false }  # 코딩
  agentic: { s: 92.3, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.1, z: 1.0, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 983k · 종합지능 **33.6861915246676** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 61.0654880238774 t/s · TTFT 3.7192411884139s · 983k ctx` · 가성비 28.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[gpqa-diamond]] 92.8283%×0.4, [[humanitys-last-exam]] 43.0955%×0.3 |
| 추론 | 74.2 | +1.62 | 실측 | [[critpt]] 17.7143%×1.0, [[gpqa-diamond]] 92.8283%×1.0, [[humanitys-last-exam]] 43.0955%×1.0 |
| 코딩 | 66.8 | +1.12 | 실측 | [[scicode]] 52.0833%×1.0 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[gdpval]] 1674.6 Elo×1.0, [[tau3-banking]] 47.8351%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.1 | +1.0 | 실측 | [[mmmu-pro]] 82.7746%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
