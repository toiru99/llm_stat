---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 78.5225156805831
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.8, z: 1.85, r: 77.8, estimated: false }  # 전문 지식
  reasoning: { s: 82.3, z: 2.31, r: 84.6, estimated: false }  # 추론
  coding: { s: 79.8, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 87.8, z: 1.48, r: 72.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.6, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 78.5225156805831 t/s · TTFT 11.9610259937834s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.8 | +1.85 | 실측 | [[gpqa-diamond]] 93.7373737373737%×0.4, [[humanitys-last-exam]] 52.8266913809083%×0.3 |
| 추론 | 84.6 | +2.31 | 실측 | [[critpt]] 28.2857142857143%×1.0, [[gpqa-diamond]] 93.7373737373737%×1.0, [[humanitys-last-exam]] 52.8266913809083%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 55.4398148148148%×1.0 |
| 에이전트 | 72.3 | +1.48 | 실측 | [[gdpval]] 1604.81%×1.0, [[tau3-banking]] 44.7422680412371%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.4277456647399%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
