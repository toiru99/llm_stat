---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 44.1646231569372
price_blended_usd_1m: 3.85
output_speed_tps: 77.3389904106873
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.6, z: 1.94, r: 79.1, estimated: false }  # 전문 지식
  reasoning: { s: 83.9, z: 2.42, r: 86.3, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.44, r: 71.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.7, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.1646231569372** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 77.3389904106873 t/s · TTFT 39.9117150502471s · 1M ctx` · 가성비 11.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 79.1 | +1.94 | 실측 | [[gpqa-diamond]] 93.2323%×0.4, [[humanitys-last-exam]] 54.8656%×0.3 |
| 추론 | 86.3 | +2.42 | 실측 | [[critpt]] 29.1429%×1.0, [[gpqa-diamond]] 93.2323%×1.0, [[humanitys-last-exam]] 54.8656%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 56.3657%×1.0 |
| 에이전트 | 71.6 | +1.44 | 실측 | [[gdpval]] 1729.64 Elo×1.0, [[tau3-banking]] 42.0619%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 84.7399%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
