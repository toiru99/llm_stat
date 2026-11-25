---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 55.8816538548089
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.5, z: 0.57, r: 58.5, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.1, r: 51.4, estimated: false }  # 추론
  coding: { s: 60.5, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 59.6, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.3, z: 0.05, r: 50.7, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.73, r: 61.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.54, r: 58.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 55.8816538548089 t/s · TTFT 20.8423054449869s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.5 | +0.57 | 실측 | [[gpqa-diamond]] 83.4343%×0.4, [[humanitys-last-exam]] 17.7943%×0.3 |
| 추론 | 51.4 | +0.1 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 83.4343%×1.0, [[humanitys-last-exam]] 17.7943%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 45.7176%×1.0, [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[gdpval]] 915.23 Elo×1.0, [[tau2-bench]] 78.0702%×1.0, [[tau3-banking]] 24.5361%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.7 | +0.05 | 실측 | [[mmmu-pro]] 68.7283%×1.0 |
| 긴문맥 | 61.0 | +0.73 | 실측 | [[aa-lcr]] 72.3333%×1.0 |
| 지시 따르기 | 58.1 | +0.54 | 실측 | [[ifbench]] 57.2789%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
